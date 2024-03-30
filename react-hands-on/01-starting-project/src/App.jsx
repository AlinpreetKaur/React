import { useState } from "react";
import NewProject from "./components/projects/NewProject";
import Sidebar from "./components/Sidebar";
import DefaultScreen from "./components/defaultScreen";
import ProjectDetail from "./components/projects/ProjectDetail";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: [],
  });

  function handleStartAddProject() {
    setProjectsState((prev) => {
      return {
        ...prev,
        selectedProjectId: null,
      };
    });
  }

  function handleAddProject(projectData) {
    const id = Math.random();
    const newProject = { ...projectData, id: id };
    setProjectsState((prev) => {
      return {
        ...prev,
        selectedProjectId: undefined,
        projects: [...prev.projects, newProject],
      };
    });
  }

  function handleCancelAddProject() {
    setProjectsState((prev) => {
      return { ...prev, selectedProjectId: undefined };
    });
  }

  function handleDeleteProject() {
    setProjectsState((prev) => {
      return {
        ...prev,
        selectedProjectId: undefined,
        projects: prev.projects.filter(
          (project) => project.id !== prev.selectedProjectId
        ),
      };
    });
  }

  function handleSelectProject(id) {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: id,
      };
    });
  }

  function handleAddTask(text) {
    setProjectsState((prev) => {
      const taskId = Math.random();
      const newTask = {
        text: text,
        projectId: prev.selectedProjectId,
        id: taskId,
      };

      return {
        ...prev,
        tasks: [newTask, ...prev.tasks],
      };
    });
  }
  function handleDelTask(id) {
    setProjectsState((prev) => {
      
      return {
        ...prev,
        tasks: prev.tasks.filter((task)=>task.id !== id),
      };
    });
  }

  const selectedProject = projectsState.projects.find(
    (project) => project.id === projectsState.selectedProjectId
  );

  let content = (
    <ProjectDetail
      onDeleteTask={handleDelTask}
      onAddTask={handleAddTask}
      onDelete={handleDeleteProject}
      project={selectedProject}
      tasks={projectsState.tasks}

    />
  );

  if (projectsState.selectedProjectId === null)
    content = (
      <NewProject onCancel={handleCancelAddProject} onSave={handleAddProject} />
    );
  else if (projectsState.selectedProjectId === undefined)
    content = <DefaultScreen onAddNew={handleStartAddProject} />;

  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar
        onSelect={handleSelectProject}
        onAddNew={handleStartAddProject}
        projects={projectsState.projects}
        selectedProjectId={projectsState.selectedProjectId}
      />
      {content}
    </main>
  );
}

export default App;
