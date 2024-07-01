from PIL import Image, ImageFilter
from pathlib import Path
import os, re

currentDir = os.getcwd()
originalDir = currentDir
presentationDir = currentDir + '\\thumbnail\\'

maxWidth = 300
maxHeight = 200
images = []

def process_image(im):
    width, height = im.size

    finalImage = Image.new('RGB', (maxWidth, maxHeight), (0, 0, 0))

    resizeRatio = min(maxWidth/width, maxHeight/height)
    newWidth = int(width * resizeRatio)
    newHeight = int(height * resizeRatio)
    xPositionForPaste = int((maxWidth - newWidth) / 2)
    yPositionForPaste = int((maxHeight - newHeight) / 2)

    im = im.resize((newWidth, newHeight), resample=Image.LANCZOS)

    finalImage.paste(im, (xPositionForPaste, yPositionForPaste))

    return finalImage

overwrite = False

print('')
print('Executing in dir: ' + currentDir)
print('')

if not os.path.isdir(presentationDir):
   os.makedirs(presentationDir)
   print('Created directory: ' + presentationDir)

for image in os.listdir(originalDir):
    if image.endswith('.jpg'):
        images.append(image)
        destinationFile = presentationDir + image

        if Path(destinationFile).exists() and not overwrite:
            print('Skipped: ' + originalDir + '\\' + image)
            continue

        print('Processing: ' + originalDir + '\\' + image)
        newImage = process_image( Image.open(originalDir + '\\' + image) )
        newImage.save(destinationFile)
        print('Saved at ' + destinationFile)
        print('')

def extract_number(filename):
    match = re.search(r'(\d+)', filename)
    return int(match.group(1)) if match else float('inf')

print('')
print('Images array:')
images.sort(key=extract_number)
print(images)