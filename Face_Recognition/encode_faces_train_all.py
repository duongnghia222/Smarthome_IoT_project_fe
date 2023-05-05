from imutils import paths
import pickle
import cv2
import os
import face_recognition

print("-----------------Training --------------")

folder_path = "dataset/"

# Get all files and directories in the folder
all_items = os.listdir(folder_path)

# Filter out only the directories
folders = [item for item in all_items if os.path.isdir(os.path.join(folder_path, item))]
encodingFile = 'encodings.pickle'
detectionMethod = 'hog'

for (i, folder) in enumerate(folders):
    pathToImages = 'dataset/' + folder
    imagePaths = list(paths.list_images(pathToImages))
    knownEncodings = []
    knownNames = []

    for (i, imagePath) in enumerate(imagePaths):
        print("Processing image {}/{}".format(i+1, len(imagePaths)))
        name = imagePath.split(os.path.sep)[-2].split('/')[1]
        print(name)
        image = cv2.imread(imagePath)
        rgb = cv2.cvtColor(image, cv2.COLOR_BGR2RGB)
        boxes = face_recognition.face_locations(rgb, model=detectionMethod)
        encodings = face_recognition.face_encodings(rgb, boxes)
        for encoding in encodings:
            knownEncodings.append(encoding)
            knownNames.append(name)

    if os.path.exists(encodingFile):
        with open(encodingFile, "rb") as f:
            existingData = pickle.load(f)
        existingData["encodings"].extend(knownEncodings)
        existingData["names"].extend(knownNames)
        data = existingData
    else:
        data = {"encodings": knownEncodings, "names": knownNames}
    with open(encodingFile, "wb") as f:
        pickle.dump(data, f)
    print("done with folder", folder)










