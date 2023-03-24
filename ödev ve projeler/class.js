class Dersler {
    constructor(name, teacher) {
        this.name= name;
        this.teacher= teacher;
    }
    getClassNameWithTeacher() {
        return this.name+ "dersin ogretmeni:" + this.teacher; 
    };
};

const mathLesson = new Dersler(name= "Matematik", teacher= "Umut");
console.log('Math Object', mathLesson);