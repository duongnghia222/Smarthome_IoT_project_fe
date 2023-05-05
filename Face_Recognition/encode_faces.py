from imutils import paths
import pickle
import cv2
import os
import face_recognition

name = 'admin'

pathToImages = 'dataset/' + name
encodingFile = 'encodings.pickle'
detectionMethod = 'hog'

print("-----------------Training --------------")
imagePaths = list(paths.list_images(pathToImages))
knownEncodings = []
knownNames = []


for (i, imagePath) in enumerate(imagePaths):
    print("Processing image {}/{}".format(i+1, len(imagePaths)))
    name = imagePath.split(os.path.sep)[-2]
    image = cv2.imread(imagePath)
    rgb = cv2.cvtColor(image, cv2.COLOR_BGR2RGB)
    boxes = face_recognition.face_locations(rgb, model=detectionMethod)
    encodings = face_recognition.face_encodings(rgb, boxes)
    for encoding in encodings:
        knownEncodings.append(encoding)
        knownNames.append(name)

data = {"encodings": knownEncodings, "names": knownNames}

with open(encodingFile, "wb") as f:
    f.write(pickle.dumps(data))










