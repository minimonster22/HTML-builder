const fsPromises = require('fs').promises;
const path = require('path');

const sourceDirectory = path.join(__dirname, 'files');
const targetDirectory = path.join(__dirname, 'files-copy');

const copyDirectory = async () => {
    try {
        await fsPromises.rm(targetDirectory, { recursive: true, force: true });
        await fsPromises.mkdir(targetDirectory, { recursive: true });
        const files = await fsPromises.readdir(sourceDirectory, { withFileTypes: true });
        await Promise.all(
            files.map(async (file) => {
                const sourcePath = path.join(sourceDirectory, file.name);
                const targetPath = path.join(targetDirectory, file.name);
                await fsPromises.copyFile(sourcePath, targetPath);
            })
        );

        console.log('Directory copied successfully.');
    } catch (error) {
        console.error('Error copying directory:', error);
    }
};

copyDirectory();