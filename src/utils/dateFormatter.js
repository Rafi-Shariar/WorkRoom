
export const dateFormatter = () =>{

    const createdAt = new Date();

    const formattedDate = createdAt.toLocaleDateString('en-GB', {
  day: '2-digit',
  month: 'long',
  year: 'numeric',
});

return formattedDate;

}