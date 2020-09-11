import React, { FC } from 'react';
import { TaskItemProps } from './types';
import { StyledTaskItem, StyledTaskChanges, StyledToggle } from './styled';

const TaskItem: FC<TaskItemProps> = ({ title, id, ...rest }) => {
  return (
    <StyledTaskItem {...rest}>
      <div className="task-text">
        <StyledToggle htmlFor={`${id}`}>
          <input type="checkbox" />
          <div>
            <div className="rounded-ball" />
          </div>
        </StyledToggle>
      </div>
      <StyledTaskChanges>
        <button>
          edit
        </button>
        <button>
          delete
        </button>
      </StyledTaskChanges>
    </StyledTaskItem>
  );
};

export default TaskItem;
