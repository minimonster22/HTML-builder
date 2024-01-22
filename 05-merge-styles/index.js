const fs = require('fs').promises;
const path = require('path');

async function compileStyles() {
    const stylesFolderPath = '05-merge-styles/styles';

    try {
        const files = await fs.readdir(stylesFolderPath);

        const styles = [];
        for (const file of files) {
            if (path.extname(file) === '.css') {
                const filePath = path.join(stylesFolderPath, file);
                const fileContent = await fs.readFile(filePath, 'utf-8');
                styles.push(fileContent);
            }
        }
        const bundleFilePath = '05-merge-styles/project-dist/bundle.css';
        await fs.writeFile(bundleFilePath, styles.join('\n'), 'utf-8');

        console.log('Styles compiled successfully.');
    } catch (error) {
        console.error('Error compiling styles:', error);
    }
}

compileStyles();