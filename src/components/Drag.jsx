import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import TEAM_DATA from "../utils/data";

const Drag = () => {
  const [items, setItems] = useState(TEAM_DATA);

  const dragItem = items.map((data, index) => (
    <Draggable key={data.id} draggableId={data.id.toString()} index={index}>
      {(provided) => {
        return (
          <div
            {...provided.dragHandleProps}
            {...provided.draggableProps}
            ref={provided.innerRef}
          >
            <div
              style={{
                height: "100px",
                width: "100px",
                backgroundColor: "orange",
              }}
            >
              {data.name}
            </div>
          </div>
        );
      }}
    </Draggable>
  ));
  const handleonDragEnd = (res) => {
    const itemsCopy = [...items];
    const [reorderdItem] = itemsCopy.splice(res.source.index, 1);
    itemsCopy.splice(res.destination.index, 0, reorderdItem);
    setItems(itemsCopy);
  };

  return (
    <DragDropContext onDragEnd={handleonDragEnd}>
      <Droppable droppableId="items">
        {(provided) => (
          <div {...provided.droppableProps} ref={provided.innerRef}>
            {dragItem}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default Drag;
