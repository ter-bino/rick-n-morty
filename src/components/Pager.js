import React, { useState, useEffect } from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';

const Pager = ({ totalPages, onPageJump, setError }) => {

  const [currentPage, setCurrentPage] = useState(1);
  const [jumpCount, setJumpCount] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setJumpCount(0);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [jumpCount]);

  const handlePageJump = (newPage) => {
    if(currentPage!==newPage) {
      if(jumpCount < 5) {
        setJumpCount(prevCount => prevCount + 1);
        onPageJump(newPage);
        setCurrentPage(newPage);
  
      } else {
        setError("You're switching pages too fast. Please slow down.")
      }
    }
  }

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      handlePageJump(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      handlePageJump(currentPage + 1);
    }
  };

  const renderPageButtons = () => {
    let buttons = [];
    let cPage = currentPage;

    if(cPage<=3) {
        for(let i=1; i<=4; i++) {
            buttons.push(
                <Button
                  key={i}
                  variant = {i===cPage? 'primary': 'secondary'}
                  onClick = {() => {handlePageJump(i)}}
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
                onClick = {() => {handlePageJump(totalPages)}}>
              {totalPages}
            </Button>
        )
    } else if(cPage>=totalPages-2) {
        buttons.push(
            <Button key={1} 
                variant="secondary"
                onClick = {() => {handlePageJump(1)}}>
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
                  onClick = {() => {handlePageJump(i)}}
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
                onClick = {() => {handlePageJump(1)}}>
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
                  onClick = {() => {handlePageJump(i)}}
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
                onClick = {() => {handlePageJump(totalPages)}}>
              {totalPages}
            </Button>
        );
    }

    return buttons;
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