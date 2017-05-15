import serial
def main():
	ser = serial.Serial('COM3', 9600)
	ser.write('1')

# dev/ttyACM0

