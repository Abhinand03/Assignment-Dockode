

const readline = require('readline');

const userinput = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

userinput.question('Enter Row number =',(a)=>{
    userinput.question('Enter Col number =',(b)=>{
        row=parseInt(a)
        col=parseInt(b)
        

for (i = 1; i <= 2 * row + 1; i++) {
    var out = " "
    for (j = 1; j <= 2 * row + col; j++) {
        if (i % 2 != 0 &&  (j - 2) % 4 === 0) {
            out += '___'

        }
        
        else if (i % 2 == 0 && j % 4 == 0) {
            out += '___'

        }
        else if (i % 2 == 0 && (j - 1) % 4 == 0) {
            out += '/'
        }
        else if (i % 2 != 0 && (j + 1) % 4 == 0 && i > 1) {
            out += '/'
        }
        else if (i % 2 == 0 && (j + 1) % 4 == 0) {
            out += '\\'
        }
        else if (i % 2 != 0 && (j - 1) % 4 == 0 && i > 1) {
            out += '\\'
        }

        else {
            if(i==1)
            {
                out+=' '
            }
            else{

                out += '   '
            }
        }
    }
    console.log(out);
}
userinput.close()

    })
})


