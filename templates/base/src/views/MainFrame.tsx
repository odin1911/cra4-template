import { css } from 'styled-components';
import { Outlet } from 'react-router-dom';

interface MainFrameProps {}

const useStyles = (props: MainFrameProps) => ({
  root: css`
    width: 100%;
    height: 100%;
    min-width: 1024px;
  `,
  main: css`
    height: 100%;
  `,
});

function MainFrame(props: MainFrameProps) {
  const styles = useStyles(props);

  return (
    <div css={styles.root}>
      <main css={styles.main}>
        <Outlet />
      </main>
    </div>
  );
}

export default MainFrame;
