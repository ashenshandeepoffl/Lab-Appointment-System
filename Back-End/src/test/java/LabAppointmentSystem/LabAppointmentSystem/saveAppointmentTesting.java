package LabAppointmentSystem.LabAppointmentSystem;

import com.example.consultationWebBacked.DTO.AppointmentDTO;
import com.example.consultationWebBacked.entity.Appointment;
import com.example.consultationWebBacked.repositories.AppointmentRepo;
import com.example.consultationWebBacked.service.AppointmentService;
import com.example.consultationWebBacked.util.VarList;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.Assert.assertNotNull;

@SpringBootTest

public class saveAppointmentTesting {
    @Autowired
    private AppointmentService appointmentService;

    @Autowired
    private AppointmentRepo appointmentRepo;

    @Test
    public void testConsultSave() {
        AppointmentDTO appointmentDTO = new AppointmentDTO();

        appointmentDTO.setfName("Jone");
        appointmentDTO.setAddress("Colomco 05");
        appointmentDTO.setAge("15");
        appointmentDTO.setDob("10-09-2000");
        appointmentDTO.setSex("Male");
        appointmentDTO.setCategory("IT");
        appointmentDTO.setCountry("USA");
        appointmentDTO.setDate("10-09-2023");
        appointmentDTO.setTime("09.30 P.M");
        appointmentDTO.setEmail("jone@gmail.com");
        appointmentDTO.setPhone("0775132697");



        String result = appointmentService.saveAppointment(appointmentDTO);

        // Assert that the result is as expected (e.g., VarList.RSP_SUCCESS)
        assertEquals(VarList.RSP_SUCCESS, result);

        // Verify that the schedule has been saved in the repository
        Appointment saveAppointment = appointmentRepo.findById(3).orElse(null);
        assertNotNull(saveAppointment);

        // Add more assertions as needed to verify the saved data.
    }
}
