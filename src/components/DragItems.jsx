import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import TEAM_DATA from "../utils/data";

const DragItems = () => {
  const [items, setItems] = useState(TEAM_DATA);

  items.map((data, index) => (
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
};

export default DragItems;
