const fs = require('fs').promises;
const path = require('path');

const folderPath = '03-files-in-folder/secret-folder';

async function getFileInformation() {
    try {
        const files = await fs.readdir(folderPath, { withFileTypes: true });

        for (const file of files) {
            if (file.isFile()) {
                const filePath = path.join(folderPath, file.name);
                const fileStat = await fs.stat(filePath);

                const fileExtension = path.extname(file.name).slice(1);

                console.log(`${file.name}-${fileExtension}-${(fileStat.size / 1024).toFixed(3)}kb`);
            } else {
                console.error(`Error: ${file.name} is a directory.`);
            }
        }
    } catch (error) {
        console.error('Error reading the directory:', error);
    }
}

getFileInformation();