const nama = 'Kelompok 3'


// Membuat Object Pertanyaan dan Opsi Menggunakan Function()
const questions = []

function addQuestions(nomor, pertanyaan, opsi) {
    const newQuestion = {
        nomor: nomor,
        pertanyaan: pertanyaan,
        opsi: opsi
    }
    questions.push(newQuestion)  
}

addQuestions('1', 'Berapa hasil dari 1 + 1?', ["a. 2", "b. 3", "c. 4", "d. 5"])
addQuestions('2', 'Berapa hasil dari 2 + 2?', ["a. 2", "b. 3", "c. 4", "d. 5"])
addQuestions('3', 'Berapa hasil dari 2 + 4?', ["a. 2", "b. 3", "c. 4", "d. 5"])
addQuestions('4', 'Berapa hasil dari 2 + 5?', ["a. 2", "b. 3", "c. 4", "d. 5"])
addQuestions('5', 'Berapa hasil dari 4 + 5?', ["a. 2", "b. 3", "c. 4", "d. 5"])
addQuestions('6', 'Berapa hasil dari 1 - 1?', ["a. 2", "b. 3", "c. 4", "d. 5"])
addQuestions('7', 'Berapa hasil dari 10 / 10?', ["a. 2", "b. 3", "c. 4", "d. 5"])
addQuestions('8', 'Berapa hasil dari 5 x 2?', ["a. 2", "b. 3", "c. 4", "d. 5"])
addQuestions('9', 'Berapa hasil dari 7 x 1?', ["a. 2", "b. 3", "c. 4", "d. 5"])
addQuestions('10', 'Berapa hasil dari (2x1) + (2+2)', ["a. 3", "b. 4", "c. 5", "d. 6"])




// Membuat Object Jawaban User dengan Function()
const userAnswers = []

function addUserAnswer(answer_user) {
    const newUserAnswers = {
        answer_user: answer_user
    }
    userAnswers.push(newUserAnswers)
}

addUserAnswer("a. 2")
addUserAnswer("c. 4")
addUserAnswer("c. 6")
addUserAnswer("d. 9")
addUserAnswer("c. 7")
addUserAnswer("a. 0")
addUserAnswer("d. 1")
addUserAnswer("b. 10")
addUserAnswer("d. 7")
addUserAnswer("d. 6")




// Membuat Object Jawaban Benar dengan Function()
const correctAnswer = []

function addCorrectAnswer(nomor, answer) {
    const newCorrectAnswer = {
        nomor: nomor,
        answer: answer
    }
    correctAnswer.push(newCorrectAnswer)
}

addCorrectAnswer('1','a. 2')
addCorrectAnswer('2','c. 4')
addCorrectAnswer('3','c. 6')
addCorrectAnswer('4','c. 7')
addCorrectAnswer('5','d. 9')
addCorrectAnswer('6','a. 0')
addCorrectAnswer('7','d. 1')
addCorrectAnswer('8','b. 10')
addCorrectAnswer('9','d. 7')
addCorrectAnswer('10','d. 6')




// Membuat Sistem Poin Benar dan Salah
let point_benar = 0;
let point_salah = 0;




// Membuat Pengulangan untuk Output
for (let i= 0; i < questions.length; i++){
    console.log("Pertanyaan " + questions[i].nomor ,":", questions[i].pertanyaan, questions[i].opsi);
    console.log("Jawaban anda: " + userAnswers[i].answer_user);
    console.log("Jawaban benar:  " + correctAnswer[i].answer);




// Mmebuat Perbandingan antara Jawaban User dan Jawaban Benar
 if ( userAnswers[i].answer_user === correctAnswer[i].answer) {
      console.log('Jawaban benar! Poin ditambah satu.\n');
      point_benar++;
    } else {
      console.log('Jawaban Salah! Poin salah ditambah satu.\n');
      point_salah++;
   };
}

console.log("Terimakasih "  + nama + " telah menyelesaikan test ini...")
console.log("Anda menjawab " + point_benar +" pertanyaan dengan benar,")
console.log("dan " + point_salah + " pertanyaan salah")




