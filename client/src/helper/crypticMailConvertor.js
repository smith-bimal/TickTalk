export const crypticMailConvertor = (mail) => {
    if (!mail) return '';
    const parts = mail.split('@');
    if (parts.length !== 2) return mail;
    const username = parts[0];
    const domain = parts[1];
    if (username.length < 3) return mail; // Username too short to cryptic
    const crypticUsername = username[0] + '*'.repeat(username.length - 2) + username[username.length - 1];

    return `${crypticUsername}@${domain}`;
}