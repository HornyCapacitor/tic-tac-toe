let markAlreadySet = false
let lastMark = "O"
let fieldsId = []
let marks = [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined]


function reset() {
  for (i = 0; i <= 8; i++) {
    document.getElementById([i]).textContent = "."
    markAlreadySet = false
    lastMark = "O"
    fieldsId = []
    resultsId = []
    marks = [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined]
    document.querySelector("#winner-info").textContent = ""
  }
}

function insertMark(id) {
  if (fieldsId.includes(id) === false) {
    if (lastMark === "X") {
      document.getElementById(id).textContent = "O"
      lastMark = "O"
      fieldsId.push(id)
      marks[id] = "O"
      isWinner()
    } else {
      document.getElementById(id).textContent = "X"
      lastMark = "X"
      fieldsId.push(id)
      marks[id] = "X"
      isWinner()
    }
  } else {
    console.log("You can't change this field!")
  }
}

function isWinner() {
  let winnerInfo = document.getElementById("winner-info")
  if (marks[0] === "X" && marks[1] === "X" && marks[2] === "X") {
      winnerInfo.textContent = "X is the winner!"
  } else if (marks[3] === "X" && marks[4] === "X" && marks[5] === "X") {
        winnerInfo.textContent = "X is the winner!"
  } else if (marks[6] === "X" && marks[7] === "X" && marks[8] === "X") {
        winnerInfo.textContent = "X is the winner!"
  } else if (marks[0] === "X" && marks[3] === "X" && marks[6] === "X") {
        winnerInfo.textContent = "X is the winner!"
  } else if (marks[1] === "X" && marks[4] === "X" && marks[7] === "X") {
        winnerInfo.textContent = "X is the winner!"
  } else if (marks[2] === "X" && marks[5] === "X" && marks[8] === "X") {
        winnerInfo.textContent = "X is the winner!"
  } else if (marks[0] === "X" && marks[4] === "X" && marks[8] === "X") {
        winnerInfo.textContent = "X is the winner!"
  } else if (marks[2] === "X" && marks[4] === "X" && marks[6] === "X") {
        winnerInfo.textContent = "X is the winner!"
  } else if (marks[0] === "O" && marks[1] === "O" && marks[2] === "O") {
        winnerInfo.textContent = "O is the winner!"
  } else if (marks[3] === "O" && marks[4] === "O" && marks[5] === "O") {
        winnerInfo.textContent = "O is the winner!"
  } else if (marks[6] === "O" && marks[7] === "O" && marks[8] === "O") {
        winnerInfo.textContent = "O is the winner!"
  } else if (marks[0] === "O" && marks[3] === "O" && marks[6] === "O") {
        winnerInfo.textContent = "O is the winner!"
  } else if (marks[1] === "O" && marks[4] === "O" && marks[7] === "O") {
        winnerInfo.textContent = "O is the winner!"
  } else if (marks[2] === "O" && marks[5] === "O" && marks[8] === "O") {
        winnerInfo.textContent = "O is the winner!"
  } else if (marks[0] === "O" && marks[4] === "O" && marks[8] === "O") {
        winnerInfo.textContent = "O is the winner!"
  } else if (marks[2] === "O" && marks[4] === "O" && marks[6] === "O") {
        winnerInfo.textContent = "O is the winner!"
  }
}