from os import write
import face_recognition
import argparse
import pickle
import cv2
import time
import imutils

# ap = argparse.ArgumentParser()
#
# # nếu muốn lưu video từ webcam
# ap.add_argument("-o", "--output", type=str, help="path to the output video")
# ap.add_argument("-y", "--display", type=int, default=1, help="whether or not to display output frame to screen")


detection_method = 'hog'
encodings_file = 'encodings.pickle'

# load the known faces and encodings
print("[INFO] loading encodings...")
with open(encodings_file, "rb") as f:
    encoding_data = f.read()
data = pickle.loads(encoding_data)

print(data)