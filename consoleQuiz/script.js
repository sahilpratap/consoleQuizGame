// constructer function 


var Person = function (name,yearOfBirth,job) {


          this.name = name;
          this.yearOfBirth = yearOfBirth;
          this.job = job;

}

Person.prototype.calculateAge = function() {

    console.log(2018-this.yearOfBirth);
}

var john = new Person('john',1996,'teacher');
var mark = new Person('Mark',1990,'artist');
john.calculateAge();
mark.calculateAge();
Person.prototype.lastName = 'smith';
console.log(john);



// Object.create



var perProto = {

     calculateAge: function() {
 
           console.log(2018 - this.yearOfBirth);
     }

};


var john = Object.create(perProto);
john.name = 'john';
john.yearOfBirth = 1996;
john.job = 'teacher';


var jane = Object.create(perProto, {

         name : {value : 'jane'},
         yearOfBirth: {value : 1990},
         job: {value: 'teacher'}

});





//Passing functions as an arguments


var years = [1990,1995,1980,1985,2003];

function arrayCal(arr,fn) {

var array = [];
for(var i=0;i<arr.length;i++)
{
   array.push(fn(arr[i]));

}

return array; 
        
}


function calculateAge(year) {

	return (2018 - year);
}


function calculateFullAge(age) {

 return age>=18 ;

}


var ages = arrayCal(years,calculateAge);
var fullAges = arrayCal(ages,calculateFullAge);
console.log(ages);
console.log(fullAges);




//Bind, call , apply

var john ={

	name: 'John',
	age: 26,
	job: 'teacher',
	presentation: function (style,timeOfDay) {

       if(style === 'formal')
       {
         console.log('Good ' + timeOfDay +',Ladies and gentleman! I\'m ' + 
         	this.name + '.I\'m a ' + this.job + ' and I\'m ' + this.age +' years old.');
         
         }else if(style === 'friendly') {

           console.log('Hey what\'s up? I\'m ' + this.name +',I\'m a ' +
            this.job +' and I\'m ' + this.age + ' years old.Have a nice' + timeOfDay + '.' );
        } 

	}
};


var emily = {

	     name: 'emily',
	     age: 35,
	     job: 'designer'

};

john.presentation('formal','morning');
john.presentation.call(emily,'formal','morning');
john.presentation.apply(emily,['friendly','afternoon']);
var johnFriendly = john.presentation.bind(john,'friendly');
johnFriendly('morning');
johnFriendly('Night');



















