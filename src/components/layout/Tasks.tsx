import { Box, Checkbox, Flex, Input, Text } from "@chakra-ui/react";
import { useState } from "react";
import { useToDosContext } from "../../todos/todos";
import { Button, CloseIconButton } from "../Button";

const ToDo = () => {
  const { todos, setTodos } = useToDosContext();

  const [todoName, setTodoName] = useState("");

  const addTodo = () => {
    if (todoName !== "") {
      setTodos([...todos, { isDone: false, task: todoName }]);
      setTodoName("");
    }
    return;
  };

  const handleComplete = (todo: { isDone: boolean; task: string }) => {
    todo.isDone = !todo.isDone;
    const newTodos = todos.filter((item) => item !== todo);
    setTodos([...newTodos, todo]);
  };

  const deleteTodo = (todo: { isDone: boolean; task: string }) => {
    const newTodos = todos.filter((item) => item !== todo);
    setTodos(newTodos);
  };

  const deleteAllTasks = () => {
    setTodos([]);
  };

  return (
    <Box mx="100" px="10" bg="#1e1e1e" py="8" borderRadius="25">
      <Flex h="45">
        <Input
          fontSize="18"
          type="text"
          background="#121212"
          color="mint"
          pl="5"
          w="100%"
          border="none"
          borderRadius="5"
          focusBorderColor="#03dac5"
          value={todoName}
          placeholder="Write new to do"
          onChange={(e) => setTodoName(e.target.value)}
        />
        <Button holderName="Add to do" ml="5" fontSize="16" onClick={addTodo} />
      </Flex>
      <Box px="70">
        <Box>
          <Flex my="15" justifyContent="space-between">
            <Text fontSize="20">A list of to do</Text>
            <Button holderName="Clear all tasks" fontSize="16" h="30" onClick={deleteAllTasks} />
          </Flex>
          <Box>
            {todos.map((todo) => {
              if (todo.isDone === false) {
                return (
                  <Flex
                    align="center"
                    justifyContent="space-between"
                    borderBottom="1px solid #2e2e2e"
                    py="3"
                    key={`${todo.task}`}
                  >
                    <Checkbox colorScheme="mint" onChange={() => handleComplete(todo)}>
                      {todo.task}
                    </Checkbox>
                    <Box onClick={() => deleteTodo(todo)}>
                      <CloseIconButton />
                    </Box>
                  </Flex>
                );
              }
            })}
          </Box>
          <Box mt="25">
            <Text mb="25" fontSize="20">
              A list of completed to do
            </Text>
            <Box>
              {todos.map((todo) => {
                if (todo.isDone === true) {
                  return (
                    <Flex
                      align="center"
                      justifyContent="space-between"
                      borderBottom="1px solid #2e2e2e"
                      py="3"
                      key={`${todo.task}`}
                    >
                      <Checkbox colorScheme="mint" isChecked onChange={() => handleComplete(todo)}>
                        {todo.task}
                      </Checkbox>
                      <Box onClick={() => deleteTodo(todo)}>
                        <CloseIconButton />
                      </Box>
                    </Flex>
                  );
                }
              })}
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ToDo;
