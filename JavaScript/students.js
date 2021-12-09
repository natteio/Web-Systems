var fn, mi, ln, units, bday, b_day;
let i = 0;
var sortedTable="";

const numb = numberOfStudents();
studentList = new Array();

function numberOfStudents() {
    let numberStudents = parseInt(window.prompt('How many students?'));
    return numberStudents;
}

while (i < numb) {
    var student_info = {
        "fn": fn,
        "mi": mi,
        "ln": ln, 
        "b_day" : b_day,
        "bday": function (){
            var month = parseInt(this.b_day.getMonth());
            var date = this.b_day.getDate();
            var year = this.b_day.getFullYear();

            var bdate = get_month(month)+'-'+date+'-'+year;
            return bdate;
        },
        "units": units,
        "age": function (){
            var diff_ms = Date.now() - this.b_day.getTime();
            var age_dt = new Date(diff_ms);
            return Math.abs(age_dt.getUTCFullYear()-1970);
        },
        "tuition": function(){
            return (this.units * 1234.56).toFixed(2);
        },
        "fullname" : function(){
            return (this.fn+' '+this.mi+' '+this.ln).toUpperCase();
        }
    }
    student_info.fn = window.prompt('First Name');
    student_info.mi = window.prompt('Middle Name');
    student_info.ln = window.prompt('Last Name');
    
    student_info.b_day = new Date(window.prompt('Date of Birth (MM-DD-YYYY)'));
    student_info.units = window.prompt('Number of Units');
    student_info.bday(b_day)
    studentList.push(student_info);
    i++;
}
function get_month (month){
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August','September','October','November','December'];
    return months[month];
}
var sorted_ln = sort_ln(studentList);
function sort_ln (students){
    var node;
    for (x=0;x<numb-1;x++){
        for (i=0;i<numb-1;i++){
            if (students[i].ln > students[i+1].ln){
                node = students[i+1];
                students[i+1] = students[i];
                students[i] = node;
            }
        }
    }
    return students;
}
function table() {
    let table = "<table style='font-size:16px;'>" +
        "<tr>" +
        "<th>Full Name</th>" +
        "<th>Birthday</th>" +
        "<th>Age</th>" +
        "<th>Tuition</th>" +
        "</tr>";
    return table;
}
for (let i = 0; i < sorted_ln.length; i++) {
    let row = "<tr>" +
        "<td>" + sorted_ln[i].fullname() + "</td>" +
        "<td>" + sorted_ln[i].bday() + "</td>" +
        "<td>" + sorted_ln[i].age() + "</td>" +
        "<td>" + sorted_ln[i].tuition() + "</td>" +
        "</tr>";
    sortedTable += row;
}
let html = table() + sortedTable + "</table>";
document.write(html);