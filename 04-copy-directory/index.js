const fs = require('fs').promises;
const path = require('path');

async function copyDirectory(sourceDir, targetDir) {
    try {
        await fs.mkdir(targetDir, { recursive: true });

        const files = await fs.readdir(sourceDir);

        for (const file of files) {
            const sourcePath = path.join(sourceDir, file);
            const targetPath = path.join(targetDir, file);
            await fs.copyFile(sourcePath, targetPath);
        }

        console.log('Directory copied successfully.');
    } catch (error) {
        console.error('Error copying directory:', error);
    }
}


const sourceDirectory = path.join(__dirname, 'files');
const targetDirectory = path.join(__dirname, 'files-copy');


copyDirectory(sourceDirectory, targetDirectory);