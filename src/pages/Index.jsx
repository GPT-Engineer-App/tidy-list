import { useState } from "react";
import { Container, VStack, HStack, Input, Button, Checkbox, Text } from "@chakra-ui/react";
import { FaPlus, FaTrash } from "react-icons/fa";

const Index = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, { text: newTask, completed: false }]);
      setNewTask("");
    }
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  const toggleTaskCompletion = (index) => {
    const newTasks = tasks.map((task, i) => 
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(newTasks);
  };

  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={4} w="100%">
        <HStack w="100%">
          <Input
            placeholder="Add a new task"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
          <Button onClick={addTask} colorScheme="teal" leftIcon={<FaPlus />}>
            Add
          </Button>
        </HStack>
        <VStack w="100%" spacing={2}>
          {tasks.map((task, index) => (
            <HStack key={index} w="100%" justifyContent="space-between">
              <Checkbox
                isChecked={task.completed}
                onChange={() => toggleTaskCompletion(index)}
              >
                <Text as={task.completed ? "s" : "span"}>{task.text}</Text>
              </Checkbox>
              <Button
                size="sm"
                colorScheme="red"
                onClick={() => deleteTask(index)}
                leftIcon={<FaTrash />}
              >
                Delete
              </Button>
            </HStack>
          ))}
        </VStack>
      </VStack>
    </Container>
  );
};

export default Index;