import { Avatar, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material"
import { platform } from "os"

export const UpcomingQuiz = () =>{
    return(
        <div style={{display:'flex' , width:'70vw' , padding:'10px 0px 10px 10px' , borderRadius:'10px' , margin:'10px 10px 10px 0px'}}>
            <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell style={{fontSize:'20px'}}>ID</TableCell>
                  <TableCell style={{fontSize:'20px',  }}>Topics</TableCell>
                  <TableCell style={{fontSize:'20px',  }}>Total Questions</TableCell>
                  <TableCell style={{fontSize:'20px',  }}>Total Time</TableCell>
                  <TableCell style={{fontSize:'20px',  }}>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {/* {username.length > 0 ? (
                  username.map((user, index) => (
                    <TableRow key={index}>
                      <TableCell style={{fontSize:'16px',  }}>{index + 1}</TableCell>
                      <TableCell style={{fontSize:'16px',  }}><Avatar alt="User" src={userPic[index]} /></TableCell>
                      <TableCell style={{fontSize:'16px',  }}>{user}</TableCell>
                      <TableCell style={{fontSize:'16px',  }}>{platform[index]}</TableCell>
                      <TableCell>
                        <ButtonComponent variant='contained' onClick={() => handleDeleteClick(platform[index])}>
                          <DeleteIcon style={{padding:'0'}}/>
                        </ButtonComponent>
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={5} style={{ textAlign: 'center', color: 'red' , fontSize:'20px' }}>No Quiz At This Time</TableCell>
                  </TableRow>
                )} */}
                <TableCell style={{fontSize:'20px'}}>2</TableCell>
                  <TableCell style={{fontSize:'20px',  }}>React Advacned</TableCell>
                  <TableCell style={{fontSize:'20px',  }}>25</TableCell>
                  <TableCell style={{fontSize:'20px',  }}>20 Minutes</TableCell>
                  <TableCell style={{fontSize:'20px',  }}><Button variant="contained">Start</Button></TableCell>
              </TableBody>
            </Table>
          </TableContainer>
        </div>
    )
}

export const CompletedQuiz = () =>{
    return(
        <div style={{display:'flex' , width:'70vw' , padding:'10px 0px 10px 10px' , borderRadius:'10px' , margin:'10px 10px 10px 0px'}}>
            <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell style={{fontSize:'20px'}}>ID</TableCell>
                  <TableCell style={{fontSize:'20px',  }}>Topics</TableCell>
                  <TableCell style={{fontSize:'20px',  }}>Total Questions</TableCell>
                  <TableCell style={{fontSize:'20px',  }}>Total Time</TableCell>
                  <TableCell style={{fontSize:'20px',  }}>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {/* {username.length > 0 ? (
                  username.map((user, index) => (
                    <TableRow key={index}>
                      <TableCell style={{fontSize:'16px',  }}>{index + 1}</TableCell>
                      <TableCell style={{fontSize:'16px',  }}><Avatar alt="User" src={userPic[index]} /></TableCell>
                      <TableCell style={{fontSize:'16px',  }}>{user}</TableCell>
                      <TableCell style={{fontSize:'16px',  }}>{platform[index]}</TableCell>
                      <TableCell>
                        <ButtonComponent variant='contained' onClick={() => handleDeleteClick(platform[index])}>
                          <DeleteIcon style={{padding:'0'}}/>
                        </ButtonComponent>
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={5} style={{ textAlign: 'center', color: 'red' , fontSize:'20px' }}>No Quiz At This Time</TableCell>
                  </TableRow>
                )} */}
                <TableCell style={{fontSize:'20px'}}>1</TableCell>
                  <TableCell style={{fontSize:'20px',  }}>React Basics</TableCell>
                  <TableCell style={{fontSize:'20px',  }}>25</TableCell>
                  <TableCell style={{fontSize:'20px',  }}>20 Minutes</TableCell>
                  <TableCell style={{fontSize:'20px',  }}><Button variant="contained">Result</Button></TableCell>
              </TableBody>
            </Table>
          </TableContainer>
        </div>
    )
}