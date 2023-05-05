import cv2
import os

name = 'admin'
video = cv2.VideoCapture(0)
total = 0
images = []
while True:
    ret, frame = video.read()

    cv2.imshow("video", frame)
    key = cv2.waitKey(1) & 0xFF

    if key == ord("k"):
        images.append(frame)
        total += 1
        print(total)
    elif key == ord("q"):
        break

output_dir = 'dataset' + name
if not os.path.exists(output_dir):
    os.makedirs(output_dir)

idx = 0
for i, img in enumerate(images):
    filename = str(str(idx).zfill(5)) + '.png'
    filepath = os.path.join(output_dir, filename)
    cv2.imwrite(filepath, img)
    idx += 1
print("{} face images stored in {}.".format(total, output_dir))
video.release()
cv2.destroyAllWindows()
