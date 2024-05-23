const Footer = () => {
    const date = new Date().getFullYear();

    return (
        <footer id='footer'>
            <p>&copy; {date} Adrian Danek. All rights reserved.</p>
        </footer>
    )
}

export default Footer