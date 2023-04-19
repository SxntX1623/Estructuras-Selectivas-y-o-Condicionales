let edad, niño, preAD, aDO, aDU, aDUm

edad = Number(prompt(' Ingrese edad '))
preAD = preadolecente
aDO = adolecente
aDU = adulto
aDUm = adulto mayor




if (edad < 10){
    alert(' Segun la edad es un: '+ niño)
}else if (edad >= 10 && edad < 15) {
    alert(' Segun la edad es un: '+ preAD )
}else if (edad >= 15 && edad < 18){
    alert(' Segun la edad es un '+ aDO)
}else if(edad)