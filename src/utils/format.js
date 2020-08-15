const subjects = [
  "Artes",
  "Biologia",
  "Ciências",
  "Educação física",
  "Física",
  "Geografia",
  "História",
  "Matemática",
  "Português",
  "Química",
]

const weekdays = [
  "Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado",
]

function getSubjects(subjectNumber){
  const position = +subjectNumber-1
  return subjects[position]
}

function convertHoursToMinutes(time){
  const [hour, minutes] = time.split(":")
  return Number((hour*60) + minutes)

  // ou
  //const hour = time.split(":")[0]
  //const min = time.split(":")[1]
}
module.exports ={
  subjects,
  weekdays,
  getSubjects,
  convertHoursToMinutes
}