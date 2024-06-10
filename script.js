class User {
    constructor (firstName, lastName, age, location){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.location = location;
    }


CompareAge(userDue){
    if(this.age < userDue.age){
        return `${userDue.firstName} è più grande di ${this.firstName}.`
    } else if (this.age > userDue.age){
        return `${this.firstName} è più grande di ${userDue.firstName}`
    }else {
        return `${userDue.firstName} e ${this.firstName} hanno la stessa età`
    }
}

}


a = new User ('Giulio', 'Cesare',42 , 'Roma');
b = new User ('Marco', 'Bigno',59, 'Tokyo')

console.log(a.CompareAge(b))