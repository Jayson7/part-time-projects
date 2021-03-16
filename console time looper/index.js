var elms = document.getElementsByTagName('*'); //select all elements on the page
console.time('Loop time');
for (var i = 0; i < 5000; i++) {
    for (var j = 0, length = elms.length; j < length; j++) { // nothing to do ...    
    }
}


var personArr = [{ "personId": 123, "name": "Jhon", "city": "Melbourne", "phoneNo": "1234567890" }, { "personId": 124, "name": "Amelia", "city": "Sydney", "phoneNo": "1234567890" }, { "personId": 125, "name": "Emily", "city": "Perth", "phoneNo": "1234567890" }, { "personId": 126, "name": "Abraham", "city": "Perth", "phoneNo": "1234567890" }];
console.table(personArr, ['name', 'personId']);
console.log(typeof(personArr));
console.timeEnd('Loop time');