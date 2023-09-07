export default function Footer (){
    const currentDate = new Date().getFullYear();
    const footerContent =  "Copyright " + currentDate;
    return footerContent;
};