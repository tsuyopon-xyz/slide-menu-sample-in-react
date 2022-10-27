import { useState } from 'react';

function App() {
  return (
    <div>
      <div
        style={{
          background: 'gray',
          width: '100vw',
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <p>メイン部分</p>
      </div>
      <SlideMenu />
    </div>
  );
}

export default App;

// 説明用に1つのファイルで実装している
const SlideMenuProps: React.CSSProperties = {
  height: '100vh',
  width: '33vw',
  background: 'yellow',
  position: 'fixed',
  top: 0,
};

const SlideMenuPropsForOpen = {
  ...SlideMenuProps,
  left: 0,
  transition: 'left 0.2s',
};

const SlideMenuPropsForClose = {
  ...SlideMenuProps,
  left: 'calc(-33vw + 40px)',
  transition: 'left 0.2s',
};

const SlideMenuButtonProps: React.CSSProperties = {
  position: 'absolute',
  right: 0,
  top: 0,
  display: 'inline-block',
  border: 'none',
  outline: 'none',
  width: '40px',
  height: '40px',
};

const SlideMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div style={isOpen ? SlideMenuPropsForOpen : SlideMenuPropsForClose}>
      <div>
        <button style={SlideMenuButtonProps} onClick={() => setIsOpen(!isOpen)}>
          X
        </button>
      </div>
      <div>メニューの中身</div>
    </div>
  );
};
