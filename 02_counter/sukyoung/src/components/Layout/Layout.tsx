import './Layout.style.css';

const Layout: React.FC<{children: any}> = ({children}) => {

  return (
    <main>
      {children}
    </main>
  );
}

export default Layout;