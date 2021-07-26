from datetime import datetime, timedelta


class PoolTable:
    def __init__(self, number):
        self.number = number
        self.is_occupied = False
        self.time_start = None
        self.time_end = None
        self.start_time_display = None
        self.end_time_display = None
        self.total_time = None
        self.log_lists = []

    def check_out_table(self):
        self.is_occupied = True

        self.time_start = datetime.now()
        self.start_time_display = self.time_start.strftime("%I:%M %p")

    def check_in_table(self):
        self.time_end = datetime.now()
        self.end_time_display = self.time_end.strftime("%I:%M %p")

        self.total_time = self.time_end - self.time_start

        self.is_occupied = False
