

export default function LandingPage() {
    var mainStyle = {
        width: "100%",
        height: "100vh",
        backgroundImage: `url(${"https://images.unsplash.com/photo-1695073621086-aa692bc32a3d?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bmlrZSUyMHNob2V8ZW58MHx8MHx8fDA="})`
    }
    return (
        <div className="bg-fixed bg-cover bg-center" style={mainStyle}>
            <h1>header</h1>
            <img src=''></img>
        </div>
    )
}