const generateResetToken = () => {
    return crypto.randomBytes(32).toString('hex');
};

export default generateResetToken;