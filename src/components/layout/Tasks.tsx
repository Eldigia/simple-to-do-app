import { Box, Checkbox, Flex, Icon, Input, Text } from "@chakra-ui/react";
import { useState } from "react";
import { MdClose } from "react-icons/md";
import { useToDosContext } from "../../context/todos";
import { Button } from "../Button";

const ToDo = () => {
  const { todos, setTodos } = useToDosContext();

  const [todoName, setTodoName] = useState("");

  const addTodo = () => {
    if (todoName !== "") {
      const randomId = Math.floor(Math.random() * 2000);
      setTodos([...todos, { id: randomId, isDone: false, task: todoName }]);
      setTodoName("");
    }
    return;
  };

  const handleComplete = (todo: { id: number; isDone: boolean; task: string }) => {
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
    <Box mx="10" px="10" bg="#1e1e1e" py="8" borderRadius="20px">
      <Flex mb="5">
        <Input
          fontSize="1.5rem"
          type="text"
          background="#121212"
          pl="5"
          w="100%"
          h="50"
          border="none"
          borderRadius="5"
          colorPalette="teal"
          value={todoName}
          placeholder="Write new to do"
          onChange={(e) => setTodoName(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && addTodo()}
        />
        <Button holderName="Add to do" ml="5" onClick={addTodo} />
      </Flex>
      <Box px="70">
        <Box>
          <Flex mt="10" justifyContent="space-between">
            <Text fontSize="1.5rem" fontWeight="semibold">
              A list of to do
            </Text>
            <Button holderName="Clear all tasks" h="30" onClick={deleteAllTasks} />
          </Flex>
          <Box>
            {todos.map((todo) => {
              if (todo.isDone === false) {
                return (
                  <Flex
                    align="center"
                    justifyContent="space-between"
                    borderBottom="1px solid #2e2e2e"
                    py="4"
                    key={`${todo.id}`}
                  >
                    <Checkbox.Root checked={todo.isDone} onClick={() => handleComplete(todo)}>
                      <Checkbox.Control />
                      <Text fontSize="1.1rem">{todo.task}</Text>
                    </Checkbox.Root>
                    <Box onClick={() => deleteTodo(todo)}>
                      <Icon>
                        <MdClose size={20} />
                      </Icon>
                    </Box>
                  </Flex>
                );
              }
            })}
          </Box>
          <Box mt="8">
            <Text fontSize="1.5rem" fontWeight="semibold">
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
                      py="4"
                      key={`${todo.id}`}
                    >
                      <Checkbox.Root checked={todo.isDone} onClick={() => handleComplete(todo)}>
                        <Checkbox.Control />
                        <Text textDecoration="line-through" color="grey" fontSize="1.1rem">
                          {todo.task}
                        </Text>
                      </Checkbox.Root>
                      <Box onClick={() => deleteTodo(todo)}>
                        <Icon>
                          <MdClose size={20} />
                        </Icon>
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
