import { createStore } from "vuex";

export default createStore({
  state: {
    uiState: "start",
    characterChoices: ["baker", "mechanic", "artist"],
    character: "",
    questionIndex: 0,
    score: 0,
    questions: [
      {
        question: `What's your dog's name?`,
        baker: "Woofgang Puck",
        mechanic: "Alf",
        artist: "Salvador Dogi",
      },
      {
        question: `What's your favorite hobby?`,
        baker: "Extreme ironing",
        mechanic: "Bacon santa cosplay",
        artist: "Mimosas",
      },
      {
        question: `What's your favorite color?`,
        baker: "turquoise",
        mechanic: "yellow",
        artist: "transparent",
      },
      {
        question: `Is cereal soup?`,
        baker: "You can't be serieal",
        mechanic: "Yes, I am Jason Lengstorf",
        artist: "wut",
      },
      {
        question: `What’s the most imaginative insult you can come up with?`,
        baker: "You're a substitute teacher with no lesson plan",
        mechanic: "Yer face is a melted welly",
        artist: "You eat buttons off the remote",
      },
      {
        question: `If peanut butter wasn’t called peanut butter, what would it be called?`,
        baker: "legoome",
        mechanic: "brown paste",
        artist: "groundnut smoosh",
      },
    ],
  },
  mutations: {
    pickCharacter(state, payload) {
      state.character = payload;
    },
    updateUIState(state, payload) {
      state.uiState = payload;
    },
    pickQuestion(state, payload) {
      if (payload === state.character) {
        state.score += 10;
      } else {
        state.score -= 10;
      }

      if (state.questionIndex < state.questions.length - 1)
        state.questionIndex++;
      else if (Math.sign(state.score) > 0) state.uiState = "won";
      else state.uiState = "lost";
    },
    restartGame(state, payload) {
      state.uiState = "start";
      state.questionIndex = 0;
      state.score = 0;
    },
  },
  actions: {},
  modules: {},
});
