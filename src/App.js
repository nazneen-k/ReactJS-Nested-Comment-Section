import './App.css';
// import Comment from './components/Comment';
// import { useState } from 'react';

// const comments={
//   id: 1,
//   items:[]
// }





// function App() {
//   const {commentsData,setCommentsData} = useState(comments)
//   return (
//     <div className="App">
//       <Comment/>
//     </div>
//   );
// }

// export default App;


import { useState } from "react";
import Comment from "./components/Comment";
import useNode from "./hooks/useNode";

const comments = {
  id: 1,
  items: [],
};
const App = () => {
  const [commentsData, setCommentsData] = useState(comments);

  const { insertNode, editNode, deleteNode } = useNode();

  const handleInsertNode = (folderId, item) => {
    const finalStructure = insertNode(commentsData, folderId, item);
    setCommentsData(finalStructure);
  };

  const handleEditNode = (folderId, value) => {
    const finalStructure = editNode(commentsData, folderId, value);
    setCommentsData(finalStructure);
  };

  const handleDeleteNode = (folderId) => {
    const finalStructure = deleteNode(commentsData, folderId);
    const temp = { ...finalStructure };
    setCommentsData(temp);
  };

  return (
    <div className="App">
      <Comment
        handleInsertNode={handleInsertNode}
        handleEditNode={handleEditNode}
        handleDeleteNode={handleDeleteNode}
        comment={commentsData}
      />
    </div>
  );
};

export default App;
