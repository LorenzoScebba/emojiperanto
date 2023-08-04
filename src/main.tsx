import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {MantineProvider} from "@mantine/core";
import theme from "./theme.ts";
import {Notifications} from "@mantine/notifications";
import '@mantine/core/styles.css';
import '@mantine/notifications/styles.css';


ReactDOM.createRoot(document.getElementById('root')!).render(
    <MantineProvider theme={theme}>
      <Notifications />
      <App />
    </MantineProvider>
)
