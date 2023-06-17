import React, { useState } from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';

const Pager = ({ totalPages, onPageJump }) => {

const [currentPage, setCurrentPage] = useState(1);

const renderPageButtons = () => {
    let buttons = [];
    let cPage = currentPage;

    if(cPage<=3) {
        for(let i=1; i<=4; i++) {
            buttons.push(
                <Button
                  key={i}
                  variant = {i===cPage? 'primary': 'secondary'}
                  onClick = {() => {onPageJump(i); setCurrentPage(i)}}
                >
                  {i}
                </Button>
            );
        } 
        buttons.push(
          <Button key="ellipsis1" variant="secondary" disabled>
            ...
          </Button>
        );
        buttons.push(
            <Button key={totalPages} 
                variant="secondary"
                onClick = {() => {onPageJump(totalPages); setCurrentPage(totalPages)}}>
              {totalPages}
            </Button>
        )
    } else if(cPage>=totalPages-2) {
        buttons.push(
            <Button key={1} 
                variant="secondary"
                onClick = {() => {onPageJump(1); setCurrentPage(1)}}>
              {1}
            </Button>
        )
        buttons.push(
          <Button key="ellipsis1" variant="secondary" disabled>
            ...
          </Button>
        );
        for(let i=totalPages-3; i<=totalPages; i++) {
            buttons.push(
                <Button
                  key={i}
                  variant = {i===cPage? 'primary': 'secondary'}
                  onClick = {() => {onPageJump(i); setCurrentPage(i)}}
                >
                  {i}
                </Button>
            );
        } 
    } else {
        buttons.push(
            <Button
                key={1} 
                variant="secondary"
                onClick = {() => {onPageJump(1); setCurrentPage(1)}}>
              {1}
            </Button>
        )
        buttons.push(
          <Button key="ellipsis1" variant="secondary" disabled>
            ...
          </Button>
        );
        for(let i=cPage-2; i<=cPage+2; i++) {
            buttons.push(
                <Button
                  key={i}
                  variant = {i===cPage? 'primary': 'secondary'}
                  onClick = {() => {onPageJump(i); setCurrentPage(i)}}
                >
                  {i}
                </Button>
            );
        } 
        buttons.push(
            <Button key="ellipsis2" variant="secondary" disabled>
              ...
            </Button>
        );
        buttons.push(
            <Button key={totalPages} 
                variant="secondary"
                onClick = {() => {onPageJump(totalPages); setCurrentPage(totalPages)}}>
              {totalPages}
            </Button>
        );
    }

    return buttons;
};

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      onPageJump(currentPage - 1);
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      onPageJump(currentPage + 1);
      setCurrentPage(currentPage + 1);
    }
  };

  const buttonGroupStyling = {
    display: 'flex',
    justifyContent: 'spaceAround',
    overflow: 'auto'
  }

  return (
    <>
        <ButtonGroup style={buttonGroupStyling}>
          <Button variant="secondary" onClick={handlePreviousPage}>
              Previous
          </Button>
          {renderPageButtons()}
          <Button variant="secondary" onClick={handleNextPage}>
              Next
          </Button>
        </ButtonGroup>
    </>
  );
};

export default Pager;