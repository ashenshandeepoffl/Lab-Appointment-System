package LabAppointmentSystem.LabAppointmentSystem;

import com.example.consultationWebBacked.DTO.ScheduleDTO;
import com.example.consultationWebBacked.entity.Schedule;
import com.example.consultationWebBacked.repositories.ScheduleRepo;
import com.example.consultationWebBacked.service.ScheduleService;
import com.example.consultationWebBacked.util.VarList;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.Assert.assertNotNull;



@SpringBootTest
public class saveScheduleTesting {
    @Autowired
    private ScheduleService scheduleService;

    @Autowired
    private ScheduleRepo scheduleRepo;


    @Test
    public void testConsultSave() {
        ScheduleDTO scheduleDTO = new ScheduleDTO();

        scheduleDTO.setName("Malaraj");
        scheduleDTO.setDate("2023-09-07");
        scheduleDTO.setDay("Monday");
        scheduleDTO.setFtime("08:00 AM");
        scheduleDTO.setTtime("04:00 PM");
        scheduleDTO.setCategory("Management");


        String result = scheduleService.saveSchedule(scheduleDTO);

        // Assert that the result is as expected (e.g., VarList.RSP_SUCCESS)
        assertEquals(VarList.RSP_SUCCESS, result);

        // Verify that the schedule has been saved in the repository
        Schedule savedSchedule = scheduleRepo.findById(3).orElse(null);
        assertNotNull(savedSchedule);

        // Add more assertions as needed to verify the saved data.
    }

}
