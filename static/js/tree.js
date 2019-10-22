const tree = document.getElementById("tree");

const getChapterQuestions = (c, q) => {
  let elements = [];
  c.forEach(chapterQuestionId => {
    let pos = q
      .map(function(x) {
        return x._id;
      })
      .indexOf(chapterQuestionId);
    elements.push(q[pos]);
  });

  return elements;
};

const generateTreeItems = (c, q) => {
  let tree = "";
  const chapterQuestions = getChapterQuestions(c, q);
  chapterQuestions.forEach(question => {
    if (question.type == "open") {
      tree +=
        `<p class="list-item" title="` +
        question.content +
        `">
      <span class="icon"> <i class="fas fa-calendar-minus"></i> </span
      >` +
        question.name +
        `</p>`;
    }
  });
  return tree;
};

const generateTree = (chaptersList, questionsList) => {
  const chapters = chaptersList;

  chapters.forEach(chapter => {
    const chapterQuestions = chapter.questions;
    let tempInner =
      `<div class='dir list-item'>
    <div class='dir-header'>
      <span class='icon'><i class='fas fa-folder'></i></span> ` +
      chapter.name +
      `
      <span class='icon is-pulled-right arrow'
        ><i class='fas fa-angle-right'></i
      ></span>
    </div>
    <div class='dir-items'>` +
      generateTreeItems(chapterQuestions, questionsList) +
      `</div>
    </div>`;

    tree.innerHTML += tempInner;
  });
};

const setClickEventOnTreeItems = () => {
  const treeElements = tree.getElementsByClassName("dir");
  for (let i = 1; i <= treeElements.length; i++) {
    const treeElement = treeElements[i - 1];
    const treeElementHeader = treeElement.querySelector("div.dir-header");
    treeElementHeader.addEventListener("click", () => {
      treeElement.classList.toggle("opened-item");
    });
  }
};