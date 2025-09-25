export default function Hello({ user }) {
    return user.name ? <h2>Hello</h2> : <button>login</button>;
}
