import { Box, Checkbox, Flex, Icon, Input, Text } from "@chakra-ui/react";
import { useSetAtom } from "jotai";
import { useState } from "react";
import { MdClose } from "react-icons/md";
import { useToDosContext } from "../../context/todos";
import { tasksConfigAtom } from "../../store/tasksConfig";
import { Button } from "../Button";

const ToDo = () => {
  const [todoDescription, setTodoDescription] = useState("");
  const { tasks, handleSetTasks, handleDeleteTask } = useToDosContext();

  const setNewTasks = useSetAtom(tasksConfigAtom);

  const addTodo = () => {
    if (todoDescription !== "") {
      const randomId = Math.floor(Math.random() * 2000);

      setNewTasks({ ...tasks, incompleted: [...tasks.incompleted, { id: randomId, description: todoDescription }] });
      setTodoDescription("");
    }
    return;
  };

  const deleteAllTasks = () => {
    setNewTasks({ incompleted: [], completed: [] });
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
          value={todoDescription}
          placeholder="Write new to do"
          onChange={(e) => setTodoDescription(e.target.value)}
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
            {tasks?.incompleted?.map(({ id, description }) => (
              <Flex align="center" justifyContent="space-between" borderBottom="1px solid #2e2e2e" py="4" key={`${id}`}>
                <Checkbox.Root checked={false} onClick={() => handleSetTasks({ id, isDone: true })}>
                  <Checkbox.Control />
                  <Text fontSize="1.1rem">{description}</Text>
                </Checkbox.Root>
                <Box onClick={() => handleDeleteTask({ id, isDone: false })}>
                  <Icon>
                    <MdClose size={20} />
                  </Icon>
                </Box>
              </Flex>
            ))}
          </Box>
          <Box mt="8">
            <Text fontSize="1.5rem" fontWeight="semibold">
              A list of completed to do
            </Text>
            <Box>
              {tasks?.completed?.map(({ id, description }) => (
                <Flex
                  align="center"
                  justifyContent="space-between"
                  borderBottom="1px solid #2e2e2e"
                  py="4"
                  key={`${id}`}
                >
                  <Checkbox.Root checked onClick={() => handleSetTasks({ id, isDone: false })}>
                    <Checkbox.Control />
                    <Text textDecoration="line-through" color="grey" fontSize="1.1rem">
                      {description}
                    </Text>
                  </Checkbox.Root>
                  <Box onClick={() => handleDeleteTask({ id, isDone: true })}>
                    <Icon>
                      <MdClose size={20} />
                    </Icon>
                  </Box>
                </Flex>
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ToDo;
