
export type theme = {
    name: string
    pallet: {
        text: string
        background: string
        secondary: string
    }
}

const lightTheme:theme = {
name: 'light',
pallet: {
    text: '#282C34',
    background: 'white',
    secondary: '#c2c2c2',
},
}

export const darkTheme:theme = {
name: 'dark',
pallet: {
    text: 'white',
    background: '#282C34',
    secondary: '#c2c2c2',
}
}

export default lightTheme