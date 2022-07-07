import { Invoice, Payment } from './classImplement';
import { hasPrint } from './interfaceForClass';
const documentOne: hasPrint = new Invoice('Vina','pay card',50000000)
const documentTwo: hasPrint = new Payment('Bamboo','ticket',5000000)

const allDocuments: hasPrint[]=[]
allDocuments.push(documentOne)
allDocuments.push(documentTwo)
console.log(allDocuments);
