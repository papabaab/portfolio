export const handleClick =  (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
  e.preventDefault();
  const element = document.getElementById(targetId);
  if (element) element.scrollIntoView({ behavior: 'smooth' });
};