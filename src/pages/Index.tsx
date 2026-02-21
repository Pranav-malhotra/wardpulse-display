import { mockPatient } from "@/data/mockPatient";
import { PatientHeaderCard } from "@/components/PatientHeaderCard";
import { VitalCard } from "@/components/VitalCard";
import { RiskAlertCard } from "@/components/RiskAlertCard";
import { InvestigationList } from "@/components/InvestigationList";
import { MedicationList } from "@/components/MedicationList";
import { RiskTrajectoryChart } from "@/components/RiskTrajectoryChart";
import { TreatmentTimeline } from "@/components/TreatmentTimeline";
import { Shield } from "lucide-react";

const Index = () => {
  const patient = mockPatient;

  return (
    <div className="min-h-screen bg-background px-4 py-6 lg:px-8 lg:py-8">
      {/* App Header */}
      <div className="flex items-center gap-2 mb-6">
        <Shield size={24} className="text-primary" />
        <span className="font-heading text-xl text-foreground tracking-tight">PulseGuard</span>
        <span className="text-xs font-body text-muted-foreground ml-2 uppercase tracking-widest">
          Ward Display System
        </span>
      </div>

      <div className="max-w-7xl mx-auto space-y-6">
        {/* 1. Patient Header */}
        <PatientHeaderCard patient={patient} />

        {/* 2. Clinical Summary: Vitals + Risk/Actions */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
              {patient.vitals.map((v, i) => (
                <VitalCard key={v.label} vital={v} index={i} />
              ))}
            </div>
          </div>
          <div className="lg:col-span-1">
            <RiskAlertCard riskFlags={patient.riskFlags} actionItems={patient.actionItems} />
          </div>
        </div>

        {/* 3. Investigations + Medications */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <InvestigationList investigations={patient.investigations} />
          <MedicationList medications={patient.medications} />
        </div>

        {/* 4. Risk Trajectory */}
        <RiskTrajectoryChart data={patient.riskTimeline} />

        {/* 5. Treatment Timeline */}
        <TreatmentTimeline events={patient.eventsTimeline} />
      </div>

      {/* Footer */}
      <div className="max-w-7xl mx-auto mt-8 pt-4 border-t border-border text-center">
        <span className="text-xs text-muted-foreground font-body">
          PulseGuard v1.0 — AI-Driven Handoff Intelligence · Last updated: 14:00 · Auto-refresh in 60s
        </span>
      </div>
    </div>
  );
};

export default Index;
