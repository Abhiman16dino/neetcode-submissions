class Solution {
  /**
   * @param {character[][]} board
   * @return {boolean}
   */
  isValidBox(board, I, J) {
    const duplicate = [];
    for (let i = I; i < I + 3; i++) {
      for (let j = J; j < J + 3; j++) {
        if (board[i][j] == ".") {
          continue;
        }
        if (duplicate.includes(board[i][j])) {
          return false;
        } else {
          duplicate.push(board[i][j]);
        }
      }
    }
    return true;
  }

  isValidSudoku(board) {
    console.log("is valid suduko board");

    // Check Rows
    for (const items of board) {
      // console.log(items)
      const duplicate = [];
      for (const ele of items) {
        if (ele == ".") {
          continue;
        }
        if (duplicate.includes(ele)) {
          return false;
        } else {
          duplicate.push(ele);
        }
      }
    }

    // Check Coloumns
    for (let j = 0; j < 9; j++) {
        const duplicate = [];
      for (let i = 0; i < 9; i++) {
        if (board[i][j] == ".") {
          continue;
        }
        // console.log(duplicate)
        // console.log(board[i][j])
        // console.log("----------------------------")
        if (duplicate.includes(board[i][j])) {
          return false;
        } else {
          duplicate.push(board[i][j]);
        }
      }
    //   console.log('=============================')
    }

    // Check Box
    for (let box_x = 0; box_x < 9; box_x += 3) {
      for (let box_y = 0; box_y < 9; box_y += 3) {
        if (!this.isValidBox(board, box_x, box_y)) {
          return false;
        }
      }
    }

    return true;
  }
}