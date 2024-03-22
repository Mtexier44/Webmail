const receivedEmails = [
    {
      sender: "administration@ynov.com",
      subject: "Rappel - Fête du court métrage",
      date: "2024-03-20T10:00:00Z",
      content: "N'oubliez pas la fête du court métrage le ..."
    },
    {
      sender: "juanito@ynov.com",
      subject: "Urgent - Bug application JS",
      date: "2024-03-19T15:30:00Z",
      content: "Hello Thomas, nous avons un problème avec le code que tu as écris..."
    },
    {
      sender: "marie@ynov.com",
      subject: "Help projet",
      date: "2024-03-18T08:45:00Z",
      content: "Salut Thomas, j'ai besoin de toi en urgence sur notre projet !"
    },
    {
      sender: "marie@ynov.com",
      subject: "Projet Appli",
      date: "2024-03-18T08:45:00Z",
      content: "Merci Thomas, c'est bien reçu !"
    }
  ];
  
function countEmailsFromSender(mails, sender) { // une fonction qui prend en argument un tableau d'e-mails et l'adresse e-mail de l'expéditeur et qui renvoie le nombre d'e-mails reçus de cet expéditeur
    return mails.filter(mail => mail.sender === sender).length // mail est un tableau et sender la chaîne de caractères représentant l'adresse e-mail quiest filtreé par mail.filter
  }

function findEmailsBySubject(mails, keyword) { //  une fonction qui prend comme arguments un tableau d’e-mails et un mot clé et qui renvoie un tableau d’e-mails dont les sujets contiennent le mot clé (non sensible à la casse)
    return mails.filter(mail => mail.subject.toLowerCase().includes(keyword.toLowerCase())) // mail est un tableau et keyword appel un mot clé concernant les mail, return et La méthode toLowerCase() qui retourne la chaîne de caractères en minuscules ce qui permet que ce soit non sensible à la casse
}

function formatDates(mails) {return mails.map(mail => { // une fonction qui prend un tableau d'e-mails et retourne le tableau d’e-mails avec une nouvelle propriété formattedDate pour chaque e-mail. Le format de la date formattedDate doit être jour/mois/année comme 01/03/2024
// la fonction map() change chaque objet mail dans le tableau mails
    const date = new Date(mail.date) 
    const day = String(date.getDate()).padStart(2, '0') 
    const month = String(date.getMonth() + 1).padStart(2, '0') 
    const year = date.getFullYear() 
    const formattedDate = "${day}/${month}/${year}" // création d'une chaîne de date formatée dans le format "jour/mois/année"
    return { ...mail, formattedDate } // retourne un tableau contenant les objets email modifiés avec les dates
  })
}

function extractSenders(mails) { // une fonction qui prend un tableau d'e-mails et renvoie un tableau contenant les adresses e-mail uniques des expéditeurs
    return [...new Set(mails.map(mail => mail.sender))] // la fonction map() change chaque objet mail dans le tableau mails, la syntaxe [...] pour convertir les adresses e-mail uniques en un tableau et retourne ce tableau contenant des adresses e-mail uniques d'expéditeurs.
}

function findEmailsByDateRange(mails) { //  une fonction qui prend un tableau d'e-mails, une date de début et une date de fin comme arguments au format yyyy-mm-dd, et qui renvoie un tableau d'e-mails reçus dans la plage de dates spécifiée

}

function markImportantEmails(mails, keywords) { // une fonction qui prend un tableau d'e-mails et une liste de mots-clés, et qui renvoie un tableau d'e-mails avec un booléen isImportant indiquant si l'objet ou le contenu de l'e-mail contiennent (non sensible à la casse) les mots-clés de la liste. Vous devez utiliser les mots suivants Urgent, Urgence et Important

}